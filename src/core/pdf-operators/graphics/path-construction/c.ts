/* tslint:disable:max-classes-per-file class-name */
import PDFOperator from 'core/pdf-operators/PDFOperator';

import { addStringToBuffer } from 'utils';
import { isNumber, validateArr } from 'utils/validate';

/**
 * Append a cubic Bézier curve to the current path. The curve shall extend from the
 * current point to the point (x3, y3), using (x1, y1) and (x2, y2) as the Bézier
 * control points. The new current point shall be (x3, y3).
 */
class c extends PDFOperator {
  public static of = (
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    x3: number,
    y3: number,
  ) => new c(x1, y1, x2, y2, x3, y3)

  public x1: number;
  public y1: number;
  public x2: number;
  public y2: number;
  public x3: number;
  public y3: number;

  constructor(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    x3: number,
    y3: number,
  ) {
    super();
    validateArr(
      [x1, y1, x2, y2, x3, y3],
      isNumber,
      'c operator args "x1 y1 x2 y2 x3 y3" must all be numbers.',
    );
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.x3 = x3;
    this.y3 = y3;
  }

  public toString = (): string =>
    `${this.x1} ${this.y1} ${this.x2} ${this.y2} ${this.x3} ${this.y3} c\n`

  public bytesSize = () => this.toString().length;

  public copyBytesInto = (buffer: Uint8Array): Uint8Array =>
    addStringToBuffer(this.toString(), buffer)
}

export default c;
