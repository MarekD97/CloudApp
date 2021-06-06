
kind create cluster --config=kind-cluster.yml

kind load docker-image cloudapp_frontend
kind load docker-image cloudapp_backend
kind load docker-image cloudapp_db

kubectl apply -f database.yml
kubectl apply -f backend.yml
kubectl apply -f frontend.yml