'use strict';

function draw_logic(){
    canvas_buffer.strokeStyle = '#777';
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
                  'y': 0,
                },
                {
                  'x': column_x - canvas_height,
                  'y': canvas_height,
                },
              ],
              'style': 'stroke',
            });
            canvas_draw_path({
              'vertices': [
                {
                  'type': 'moveTo',
                  'x': column_x,
                  'y': 0,
                },
                {
                  'x': column_x,
                  'y': canvas_height,
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
                  'x': canvas_width,
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
                  'y': 0,
                },
                {
                  'x': column_x + canvas_height,
                  'y': canvas_height,
                },
              ],
              'style': 'stroke',
            });
        }while(column--);
    }while(row--);

    canvas_buffer.strokeStyle = '#fff';
    var row = Math.ceil(rows / 2);
    do{
        var row_x = row * 200;
        var column = Math.ceil(columns / 2);
        do{
            var column_x = column * 200;

            canvas_draw_path({
              'style': 'stroke',
              'vertices': [
                {
                  'endAngle': math_tau,
                  'radius': 6,
                  'startAngle': 0,
                  'type': 'arc',
                  'x': row_x,
                  'y': column_x,
                },
              ],
            });
        }while(column--);
    }while(row--);
}

function resize_logic(){
    canvas_buffer.lineWidth = 10;
    columns = Math.floor(canvas_width / 50);
    rows = Math.floor(canvas_height / 50)
}

var columns = 0;
var rows = 0;

window.onload = function(e){
    canvas_init();
};
