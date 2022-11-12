DB_HOST = "127.0.0.1"
DB_NAME = "postgres"
DB_USER = "clarice_p"
DB_PASS = "adminfoodCLA"

import psycopg2
import psycopg2.extras

conn = psycopg2.connect(dbname=DB_NAME, user=DB_USER, password=DB_PASS, host=DB_HOST)

with conn:
    with conn.cursor(cursor_factory=psycopg2.extras.DictCursor) as cur:
        cur.execute("SELECT * FROM restaurant_user;")
        print(cur.fetchall())


conn.close()