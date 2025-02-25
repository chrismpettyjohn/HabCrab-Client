import { IMessageComposer } from "../../../../../../api";

export class QuestGetByIdComposer implements IMessageComposer<ConstructorParameters<typeof QuestGetByIdComposer>> {
  private _data: ConstructorParameters<typeof QuestGetByIdComposer>;

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
