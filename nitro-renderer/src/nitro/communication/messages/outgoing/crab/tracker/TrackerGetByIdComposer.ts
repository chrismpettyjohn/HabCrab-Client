import { IMessageComposer } from "../../../../../../api";

export class TrackerGetByIdComposer implements IMessageComposer<ConstructorParameters<typeof TrackerGetByIdComposer>> {
  private _data: ConstructorParameters<typeof TrackerGetByIdComposer>;

  constructor(trackerId: number) {
    this._data = [trackerId];
  }

  public getMessageArray() {
    return this._data;
  }

  public dispose(): void {
    return;
  }
}
