'use strict';

function repo_drawlogic(){
    const scale = 100;
    const columns = Math.max(
      Math.ceil(canvas_properties.width / (scale / 2)),
      10
    );
    const rows = Math.ceil(canvas_properties.height / (scale / 2));

    for(let i = 0; i < rows; i++){
        for(let j = 0; j < columns; j++){
            let column_x = j * scale;

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
        }
    }

    for(let i = 0; i < rows / 2; i++){
        const row_x = i * (scale * 2) + scale;
        for(let j = 0; j < columns; j++){
            canvas_draw_path({
              'vertices': [
                [
                  'arc',
                  row_x + (j & 1 ? scale : 0),
                  j * scale + scale,
                  10,
                  0,
                  6.283185307179586,
                ],
              ],
            });
        }
    }
}

function repo_init(){
    core_repo_init({
      'menu': true,
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
