"""大学相关api"""
from datetime import datetime
import pytz
from flask import request
from njupt import Card, RunningMan
from njupt.exceptions import AuthenticationException
from . import api
from .utils import Result

timezone = pytz.timezone("Asia/Shanghai")


def is_today(a_datetime):
    current_date = datetime.now(timezone)
    return a_datetime.date() == current_date.date()


def is_same_day(datetime1, datetime2):
    return datetime1.date() == datetime2.date()


@api.route("university/njupt/card_balance")
def njupt_card_balance():
    account = request.form['account']
    password = request.form['password']
    card = Card(account=account, password=password)
    return Result.success(message='查询成功', data=card.get_balance())


@api.route("university/njupt/run_times")
def njupt_run_times():
    student_id = request.form['student_id']
    name = request.form['name']
    running_man = RunningMan(student_id, name)
    try:
        exercise_dict = running_man.check()
    except AuthenticationException as e:
        return Result.failure(message=str(e), data=None)
    origin_number = exercise_dict['origin_number']
    extra_number = exercise_dict['extra_number']
    date_list = exercise_dict['date_list']

    total_number = origin_number + extra_number

    recent_records = []
    if not date_list:
        msg = '这学期还没有跑过操'
    if len(date_list) == 1:
        if is_today(date_list[0]):
            msg = '今天只打了一次卡'
        else:
            msg = '今天没打卡'
        recent_records.extend(date_list)
    elif len(date_list) >= 2:
        if is_same_day(date_list[0], date_list[1]) and is_today(date_list[0]):
            msg = '今天打卡了'
        elif is_today(date_list[0]) and not is_same_day(date_list[0], date_list[1]):
            msg = '今天只打了一次卡'
        else:
            msg = '今天没打卡'
        recent_records.extend(date_list[:2])

    recent_records = list(
        map(lambda t: t.strftime('%Y年%m月%d日 %H时%M分'), recent_records))
    return Result.success(
        message=msg,
        data={
            'total_number': total_number,
            'recent_records': recent_records
        }
    )
