from app.database.db import db

class OrderDetail(db.Model):
    __tablename__ = 'order_detail'
    
    id = db.Column(db.Integer, primary_key=True)
    garment_id = db.Column(db.Integer, db.ForeignKey("orders.id"), nullable=False)
    service_id = db.Column(db.Integer, db.ForeignKey("service.id"), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
 
    def to_dict(self): #Para transformalos en diccionario
        """ order_detail = {
            'id': self.id,
            'garment_id': self.garment_id,
            'service_id': self.service_id,
            'price':self.price,
        }
        return order_detail """
        return self.__dict__
    
    
   