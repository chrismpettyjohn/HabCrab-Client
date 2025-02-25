import { IMessageDataWrapper, IMessageParser } from "../../../../../../api";
import { QuestData } from "../quests/QuestDataEventParser";

export class QuestListEventParser implements IMessageParser {
  private _quests: QuestData[];

  public flush(): boolean {
    this._quests = [];
    return true;
  }

  public parse(wrapper: IMessageDataWrapper): boolean {
    if (!wrapper) return false;

    const questCount = wrapper.readInt();

    for (let i = 0; i < questCount; i++) {
      const [id, parentId, title, description, createdAt] = wrapper.readString().split(";");
      this._quests.push({
        id: Number(id),
        parentId: Number(parentId),
        title,
        description,
        createdAt: Number(createdAt),
      });
    }

    return true;
  }

  public get data(): QuestData[] {
    return this._quests;
  }
}
