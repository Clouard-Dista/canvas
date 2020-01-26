from classes.entity import Entity
from classes.map.tile import Tile


class ColideUnivers:
    def __init__(self, entity: [Entity], monde: [Tile]):
        self.entitys = entity
        self.mondes = monde
