from flask import jsonify


class Result:

    @classmethod
    def result(cls, success, message, data):
        return jsonify({
            'success': success,
            'message': message,
            'data': data,
        })

    @classmethod
    def success(cls, message, data):
        return cls.result(
            success=True,
            message=message,
            data=data
        )

    @classmethod
    def failure(cls, message, data):
        return cls.result(
            success=False,
            message=message,
            data=data
        )
