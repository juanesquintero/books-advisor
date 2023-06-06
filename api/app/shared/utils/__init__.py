import re
import traceback


def get_exception():
    raw_exp = traceback.format_exc()
    exception_lines = [e.strip() for e in reversed(raw_exp.splitlines()[-3:])]
    short_exp = ' '.join(exception_lines)
    clean_exp = re.sub('File(.+), in', 'in', short_exp)
    return clean_exp, short_exp, raw_exp


def get_attr(_dict):
    return [attr for attr in _dict.keys() if not attr.startswith('_')]
