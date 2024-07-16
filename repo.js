'use strict';

function repo_drawlogic(){
    let row = rows;
    do{
        let column = columns;
        do{
            let column_x = column * 200;

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
                  column_x - canvas_properties['height'],
                  canvas_properties['height'],
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
                  canvas_properties['height'],
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
                  canvas_properties['width'],
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
                  column_x + canvas_properties['height'],
                  canvas_properties['height'],
                ],
              ],
            });
        }while(column--);
    }while(row--);

    row = Math.floor(rows / 2);
    do{
        const row_x = row * 400 + 200;
        let column = columns;
        do{
            canvas_draw_path({
              'vertices': [
                [
                  'arc',
                  row_x + (column & 1 ? 200 : 0),
                  column * 200 + 200,
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
      },
      'menu': true,
      'title': 'DotEyeIllusion.htm',
    });
    canvas_init();
    canvas_setproperties({
      'fillStyle': '#fff',
      'lineWidth': 10,
      'strokeStyle': '#777',
    });
    canvas_draw();
}

function repo_logic(){
}

function repo_resizelogic(){
    const old_columns = columns;
    const old_rows = rows;

    rows = Math.max(
      Math.floor(canvas_properties['height'] / 100),
      old_columns
    );
    columns = Math.max(
      Math.floor(canvas_properties['width'] / 100),
      old_rows
    );
}
