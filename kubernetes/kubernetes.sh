# Create cluster
kind create cluster --config=kind-cluster.yml

# Load docker images
kind load docker-image cloudapp_frontend
kind load docker-image cloudapp_backend
kind load docker-image cloudapp_db

# Apply PV & PVC
kubectl apply -f db-persistent-volume.yml
kubectl apply -f db-persistent-volume-claim.yml

# Apply pods and services
kubectl apply -f database.yml
kubectl apply -f backend.yml
kubectl apply -f frontend.yml
