import { IMessageComposer } from "../../../../../../api";

export class QuestTaskGetByIdComposer implements IMessageComposer<ConstructorParameters<typeof QuestTaskGetByIdComposer>> {
  private _data: ConstructorParameters<typeof QuestTaskGetByIdComposer>;

  constructor(questId: number) {
    this._data = [questId];
  }

  public getMessageArray() {
    return this._data;
  }

  public dispose(): void {
    return;
  }
}
