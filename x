[Unit]
Description=Aplicacion inventario
[Service]
Type=Simple
User=root
ExecStart=/root/invapp/pb serve 
WorkingDirectory=/root/invapp
[Install]
WantedBy=multi-user.target


location / {
   proxy_pass http://localhost:8090
   proxy_http_version 1.1;
   proxy_set_header Upgrade $http_upgrade;
   proxy_set_header Connection 'upgrade';
   proxy_set_header Host $host;
   proxy_cache_bypass $http_upgrade;   
}