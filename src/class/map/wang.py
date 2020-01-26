from enum import Enum


class ZType(Enum):
    ZBase = "ZBase"
    ZSurface = "ZSurface"


class Part(Enum):
    Top = 0
    TopLeft = 1
    Left = 2
    BottomLeft = 3
    Bottom = 4
    BottomRight = 5
    Right = 6
    TopRight = 7


class Wang:
    def __init__(self, zbase: str, zsurface: str):
        self.ZBase = zbase
        self.ZSurface = zsurface

    def get(self, ztype: ZType, part: Part):
        return self[ztype][part.value] == 2

    def __str__(self):
        return "{ZBase:" + self.ZBase + ",ZSurface:" + self.ZSurface + "}"
