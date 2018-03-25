/* eslint-disable new-cap */
import PDFOperator from 'core/pdf-operators/PDFOperator';

import { addStringToBuffer } from 'utils';
import { isNumber, validate } from 'utils/validate';

/**
 * Set the horizontal scaling, Th, to (scale ÷ 100). scale shall be a number
 * specifying the percentage of the normal width. Initial value: 100 (normal width).
 */
class Tz extends PDFOperator {
  public static of = (scale: number) => new Tz(scale);

  public scale: number;

  constructor(scale: number) {
    super();
    validate(scale, isNumber, 'Tz operator arg "scale" must be a number.');
    this.scale = scale;
  }

  public toString = (): string => `${this.scale} Tz\n`;

  public bytesSize = () => this.toString().length;

  public copyBytesInto = (buffer: Uint8Array): Uint8Array =>
    addStringToBuffer(this.toString(), buffer)
}

export default Tz;
