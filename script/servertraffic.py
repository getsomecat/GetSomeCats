#!/usr/bin/env python3
# Sestea

import http.server
import socketserver
import json
import time
import psutil

# The port number of the local HTTP server, which can be modified
port = 7122

class RequestHandler(http.server.BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.end_headers()

        # Limit the HTTP server to one request per second
        time.sleep(1)

        # Obtain CPU/MEM usage and network traffic info
        cpu_usage = psutil.cpu_percent()
        mem_usage = psutil.virtual_memory().percent
        bytes_sent = psutil.net_io_counters().bytes_sent
        bytes_recv = psutil.net_io_counters().bytes_recv
        bytes_total = bytes_sent + bytes_recv

        
        # Get UTC timestamp and uptime
        utc_timestamp = int(time.time())
        uptime = int(time.time() - psutil.boot_time())

        # Get the last statistics time
        last_time = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())

        # Construct JSON dictionary
        response_dict = {
            "utc_timestamp": utc_timestamp,
            "uptime": uptime,
            "cpu_usage": cpu_usage,
            "mem_usage": mem_usage,
            "bytes_sent": str(bytes_sent),
            "bytes_recv": str(bytes_recv),
            "bytes_total": str(bytes_total),
            "last_time": last_time
        }

        # Convert JSON dictionary to JSON string
        response_json = json.dumps(response_dict).encode('utf-8')
        self.wfile.write(response_json)

with socketserver.ThreadingTCPServer(("", port), RequestHandler) as httpd:
    try:
        print(f"Serving at port {port}")
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("KeyboardInterrupt is captured, program exited")
