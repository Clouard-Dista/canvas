import pygame
import json
from classes.map.tileset import Tileset

pygame.init()
gameDisplay = pygame.display.set_mode((800,600))
pygame.display.set_caption('A bit Racey')
clock = pygame.time.Clock()
crashed = False


with open('testmap/tileset.json') as json_data:
    data_dict = json.load(json_data)
    data = data_dict['tileset']
    t = Tileset(data)
    print(data)


while not crashed:

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            crashed = True

        #print(event)
    myfont = pygame.font.SysFont('Comic Sans MS', 10)

    for i in range(0, 10):
        for j in range(0, 10):
            textsurface = myfont.render(''+str(i)+','+str(j), False, (255, 0, 0))
            tileWidth = 64
            xo = (i*(tileWidth/2))
            yo = (j*(tileWidth/2))
            #to 3d########
            x = xo - yo
            y = (xo + yo) / 2
            ##############
            x += 64*5

            pygame.draw.line(gameDisplay, 200, [x, y], [x + tileWidth/2, y + tileWidth/4], 1)
            pygame.draw.line(gameDisplay, 200, [x + tileWidth/2, y + tileWidth/4], [x, y + tileWidth/2], 1)
            pygame.draw.line(gameDisplay, 200, [x, y + tileWidth/2], [x - tileWidth/2, y + tileWidth/4], 1)
            pygame.draw.line(gameDisplay, 200, [x - tileWidth/2, y + tileWidth/4], [x, y], 1)

            pygame.display.get_surface().blit(textsurface, (x-tileWidth/8, y+tileWidth/6))

    pygame.display.update()
    clock.tick(60)
pygame.quit()
quit()
