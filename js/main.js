'use strict';

function draw_logic(){
    var row = rows;
    do{
        var column = columns;
        do{
            var column_x = column * 100;

            canvas_draw_path({
              'vertices': [
                {
                  'type': 'moveTo',
                  'x': column_x,
                },
                {
                  'x': column_x - canvas_properties['height'],
                  'y': canvas_properties['height'],
                },
              ],
              'style': 'stroke',
            });
            canvas_draw_path({
              'vertices': [
                {
                  'type': 'moveTo',
                  'x': column_x,
                },
                {
                  'x': column_x,
                  'y': canvas_properties['height'],
                },
              ],
              'style': 'stroke',
            });
            canvas_draw_path({
              'vertices': [
                {
                  'type': 'moveTo',
                  'x': 0,
                  'y': column_x,
                },
                {
                  'x': canvas_properties['width'],
                  'y': column_x,
                },
              ],
              'style': 'stroke',
            });

            column_x -= 500;
            canvas_draw_path({
              'vertices': [
                {
                  'type': 'moveTo',
                  'x': column_x,
                },
                {
                  'x': column_x + canvas_properties['height'],
                  'y': canvas_properties['height'],
                },
              ],
              'style': 'stroke',
            });
        }while(column--);
    }while(row--);

    var row = Math.floor(rows / 2);
    do{
        var row_x = row * 200;
        var column = Math.floor(columns / 2);
        do{
            canvas_draw_path({
              'vertices': [
                {
                  'endAngle': math_tau,
                  'radius': 12,
                  'startAngle': 0,
                  'type': 'arc',
                  'x': row_x,
                  'y': column * 200,
                },
              ],
            });
        }while(column--);
    }while(row--);
}

function repo_init(){
    core_repo_init({
      'title': 'DotEyeIllusion.htm',
    });
    canvas_init();
}

function resize_logic(){
    columns = Math.floor(canvas_properties['width'] / 50);
    rows = Math.floor(canvas_properties['height'] / 50);
}

var columns = 0;
var rows = 0;
