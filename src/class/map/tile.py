from ..util .jsonObjectConvert import JsonObjectConvert
from .wang import Wang


class Tile (JsonObjectConvert):
    def __init__(self, walkable: bool, wang: Wang):
        self.walkable = walkable
        self.wang = wang

    def __str__(self):
        return "{walkable:" + str(self.walkable) + ",wang:" + str(self.wang) + "}"
