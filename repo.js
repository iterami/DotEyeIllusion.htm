'use strict';

function repo_drawlogic(){
    let row = rows;
    do{
        let column = columns;
        do{
            let column_x = column * scale;

            canvas_draw_path({
              'style': 'stroke',
              'vertices': [
                [
                  'moveTo',
                  column_x,
                  0,
                ],
                [
                  'lineTo',
                  column_x - canvas_properties.height,
                  canvas_properties.height,
                ],
              ],
            });
            canvas_draw_path({
              'style': 'stroke',
              'vertices': [
                [
                  'moveTo',
                  column_x,
                  0,
                ],
                [
                  'lineTo',
                  column_x,
                  canvas_properties.height,
                ],
              ],
            });
            canvas_draw_path({
              'style': 'stroke',
              'vertices': [
                [
                  'moveTo',
                  0,
                  column_x,
                ],
                [
                  'lineTo',
                  canvas_properties.width,
                  column_x,
                ],
              ],
            });

            column_x -= 800;
            canvas_draw_path({
              'style': 'stroke',
              'vertices': [
                [
                  'moveTo',
                  column_x,
                  0,
                ],
                [
                  'lineTo',
                  column_x + canvas_properties.height,
                  canvas_properties.height,
                ],
              ],
            });
        }while(column--);
    }while(row--);

    row = Math.floor(rows / 2);
    do{
        const row_x = row * (scale * 2) + scale;
        let column = columns;
        do{
            canvas_draw_path({
              'vertices': [
                [
                  'arc',
                  row_x + (column & 1 ? scale : 0),
                  column * scale + scale,
                  10,
                  0,
                  6.283185307179586,
                ],
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
        'scale': 100,
      },
      'title': 'DotEyeIllusion.htm',
    });
    canvas_init({
      'interval': false,
    });
    canvas_setproperties({
      'fillStyle': '#fff',
      'lineWidth': 10,
      'strokeStyle': '#777',
    });
    canvas_draw();
}

function repo_resizelogic(){
    columns = Math.max(
      Math.ceil(canvas_properties.width / (scale / 2)),
      10
    );
    rows = Math.ceil(canvas_properties.height / (scale / 2));
}
