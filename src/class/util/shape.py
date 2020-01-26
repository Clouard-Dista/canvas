from classes.util.coordinate import Coordinate
from typing import List


class Shape:
    def __init__(self, coordinates: List[Coordinate]):
        self.coordinates = coordinates

    def __str__(self):
        i = 0
        return_value = "{"
        return_value += "coordinates:["
        for coordinate in self.coordinates:
            if i != 0:
                return_value += ","
            return_value += str(coordinate)
            i += 1
        return return_value + "}"
