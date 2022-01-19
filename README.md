```javascript
docker build -t truckweightapi .
docker save -o D:\KI\node.js\build\truckweight_api.tar truckweightapi
#docker load -i D:\Inbox\truckweight_api.tar
docker run -d --name truckweight_api truckweight_api
docker run -it  -p 0.0.0.0:4002:4002 --name truckweightapi truckweightapi
```
