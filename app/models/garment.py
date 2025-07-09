from app.database.db import db

class Garment(db.Model):
    __tablename___= "garments"
    id = db.Column(db.Integer, primary_key=True)
    order_id = db.Column(db.Integer, db.ForeignKey("orders.id"), nullable=False)
    type = db.Column(db.String(50), nullable= False)
    description = db.Column(db.String(200))
    observations = db.Column(db.String(200))
    order_detail = db.relationship("OrderDetail", backref="garment", lazy=True )

    def to_dict(self,order_detail:bool=False): #Para transformalos en diccionario
       """  garment = {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'observations':self.observations,
        }
        if order_detail:
            garment['order_detail'] = self.garment_link
        return garment """
       return self.__dict__
    
