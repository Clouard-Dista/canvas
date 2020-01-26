from classes.map.wang import Wang
from ..util.jsonObjectConvert import JsonObjectConvert
from ..util.dimension import Dimension
from ..util.coordinate import Coordinate
from .tile import Tile
from typing import List


class Tileset(JsonObjectConvert):
    def __init__(self, tile):
        self.columns = int(tile["columns"])
        self.grid = Dimension(tile["grid"])
        self.image = tile["image"]
        self.tileoffset = Coordinate(tile["tileoffset"])
        self.tilewidth = int(tile["tilewidth"])
        self.tileheight = int(tile["tileheight"])
        self.tilecount = int(tile["tilecount"])
        self.tiles = self.__convertTileToList(tile)

    def __convertTileToList(self, tile) -> List[Tile]:
        dico = {}
        wangArr = self.__convertWangToDict(tile["wangsets"]["wangset"])
        for idx, val in enumerate(tile["tile"]):
            walk = val["property"]["value"] in ['true', 'True']
            if val['id'] in wangArr:
                wang = wangArr[val['id']]
                dico[val['id']] = Tile(walk, Wang(wang["ZBase"], wang["ZSurface"]));
            else:
                dico[val['id']] = Tile(walk, Wang("22222222", "22222222"));
        return dico

    def __convertWangToDict(self, wangset) -> dict:
        wangArr = {}
        for wang in wangset:
            for wangtile in wang["wangtile"]:
                if not wangtile["tileid"] in wangArr:
                    wangArr[wangtile["tileid"]] = {}
                wangArr[wangtile["tileid"]][wang["name"]] = wangtile["wangid"]
        return wangArr

    def __str__(self):
        return "{}"
