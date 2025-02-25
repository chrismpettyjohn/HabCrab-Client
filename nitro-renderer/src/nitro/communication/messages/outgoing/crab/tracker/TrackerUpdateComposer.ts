import { IMessageComposer } from "../../../../../../api";

export class TrackerUpdateComposer implements IMessageComposer<ConstructorParameters<typeof TrackerUpdateComposer>> {
  private _data: ConstructorParameters<typeof TrackerUpdateComposer>;

  constructor(trackerId: number, key: string, title: string, description: string) {
    this._data = [trackerId, key, title, description];
  }

  public getMessageArray() {
    return this._data;
  }

  public dispose(): void {
    return;
  }
}
