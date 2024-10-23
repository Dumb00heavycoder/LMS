import os

class Config:
    SECRET_KEY = os.urandom(24)  # Secret key for session management
    MYSQL_HOST = 'localhost'
    MYSQL_USER = 'root'
    MYSQL_PASSWORD = 'rish6732'
    MYSQL_DB = 'cs'
    MYSQL_CURSORCLASS = 'DictCursor'