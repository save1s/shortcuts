from gevent import monkey
monkey.patch_all()

import os
import leancloud
from cloud import engine

from app import app

APP_ID = os.environ['LEANCLOUD_APP_ID']  # 从 LEANCLOUD_APP_ID 这个环境变量中获取应用 app id 的值
APP_KEY = os.environ['LEANCLOUD_APP_KEY']  # 从 LEANCLOUD_APP_KEY 这个环境变量中获取应用 app key 的值

# 从 LEANCLOUD_APP_MASTER_KEY 这个环境变量中
# 获取应用 master key 的值
MASTER_KEY = os.environ['LEANCLOUD_APP_MASTER_KEY']
PORT = int(os.environ['LEANCLOUD_APP_PORT'])

leancloud.init(APP_ID, app_key=APP_KEY, master_key=MASTER_KEY)
# 如果需要使用 master key 权限访问 LeanCloud 服务，请将这里设置为 True
leancloud.use_master_key(False)

# http 重定向到 https
app = leancloud.HttpsRedirectMiddleware(app)
app = engine.wrap(app)
application = app


if __name__ == '__main__':
    # 只在本地开发环境执行的代码
    from gevent.pywsgi import WSGIServer
    from geventwebsocket.handler import WebSocketHandler
    from werkzeug.serving import run_with_reloader
    from werkzeug.debug import DebuggedApplication

    @run_with_reloader
    def run():
        global application
        app.debug = True
        application = DebuggedApplication(application, evalex=True)
        server = WSGIServer(('localhost', PORT), application, handler_class=WebSocketHandler)
        server.serve_forever()

    run()
