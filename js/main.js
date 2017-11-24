'use strict';

function draw_logic(){
    canvas_setproperties({
      'properties': {
        'strokeStyle': '#777',
      },
    });
    var row = rows;
    do{
        var column = columns;
        do{
            var column_x = column * 200;

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

            column_x -= 800;
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

    canvas_setproperties({
      'properties': {
        'fillStyle': '#000',
      },
    });
    var row = Math.floor(rows / 2);
    do{
        var row_x = row * 400;
        var column = Math.floor(columns / 2);
        do{
            canvas_draw_path({
              'vertices': [
                {
                  'endAngle': math_tau,
                  'radius': 10,
                  'startAngle': 0,
                  'type': 'arc',
                  'x': row_x,
                  'y': column * 400,
                },
              ],
            });
        }while(column--);
    }while(row--);
}

function repo_init(){
    core_repo_init({
      'globals': {
        'columns': 0,
        'rows': 0,
      },
      'title': 'DotEyeIllusion.htm',
    });
    canvas_init();

    canvas_properties['clearColor'] = '#fff';
}

function resize_logic(){
    canvas_setproperties({
      'properties': {
        'lineWidth': 10,
      },
    });
    columns = Math.floor(canvas_properties['width'] / 100);
    rows = Math.floor(canvas_properties['height'] / 100);
}
