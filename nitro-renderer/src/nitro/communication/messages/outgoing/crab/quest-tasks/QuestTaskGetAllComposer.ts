import { IMessageComposer } from "../../../../../../api";

export class QuestTaskGetAllComposer implements IMessageComposer<ConstructorParameters<typeof QuestTaskGetAllComposer>> {
  private _data: ConstructorParameters<typeof QuestTaskGetAllComposer>;

  constructor() {
    this._data = [];
  }

  public getMessageArray() {
    return this._data;
  }

  public dispose(): void {
    return;
  }
}
