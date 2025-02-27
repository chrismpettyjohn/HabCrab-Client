import { NavigatorSearchComposer, NavigatorSearchResultList } from "@nitrots/nitro-renderer";
import { FC, useEffect, useState } from "react";
import { FaBars, FaMinus, FaPlus, FaTh, FaWindowMaximize, FaWindowRestore } from "react-icons/fa";
import { LocalizeText, NavigatorSearchResultViewDisplayMode, SendMessageComposer } from "../../../../api";
import { AutoGrid, AutoGridProps, Column, Flex, Grid, Text } from "../../../../common";
import { useNavigator } from "../../../../hooks";
import { NavigatorSearchResultItemView } from "./NavigatorSearchResultItemView";

export interface NavigatorSearchResultViewProps extends AutoGridProps {
  searchResult: NavigatorSearchResultList;
  alwaysExtended?: boolean;
}

export const NavigatorSearchResultView: FC<NavigatorSearchResultViewProps> = (props) => {
  const { searchResult = null, ...rest } = props;
  const [extended, setExtended] = useState(true);
  const [displayMode, setDisplayMode] = useState<number>(0);

  const isExtended = extended || props.alwaysExtended;

  const { topLevelContext = null } = useNavigator();

  const getResultTitle = () => {
    let name = searchResult.code;

    if (!name || !name.length || LocalizeText("navigator.searchcode.title." + name) == "navigator.searchcode.title." + name) return searchResult.data;

    if (name.startsWith("${")) return name.slice(2, name.length - 1);

    return "navigator.searchcode.title." + name;
  };

  const toggleDisplayMode = () => {
    setDisplayMode((prevValue) => {
      if (prevValue === NavigatorSearchResultViewDisplayMode.LIST) return NavigatorSearchResultViewDisplayMode.THUMBNAILS;

      return NavigatorSearchResultViewDisplayMode.LIST;
    });
  };

  const showMore = () => {
    if (searchResult.action == 1) SendMessageComposer(new NavigatorSearchComposer(searchResult.code, ""));
    else if (searchResult.action == 2 && topLevelContext) SendMessageComposer(new NavigatorSearchComposer(topLevelContext.code, ""));
  };

  useEffect(() => {
    if (!searchResult) return;

    setExtended(!searchResult.closed);

    setDisplayMode(searchResult.mode);
  }, [searchResult]);

  const gridHasTwoColumns = props.alwaysExtended || displayMode >= NavigatorSearchResultViewDisplayMode.THUMBNAILS;

  if (props.alwaysExtended && props.searchResult.code === "official-root") {
    return null;
  }

  return (
    <Column className=" rounded border border-muted" gap={0}>
      <Flex fullWidth alignItems="center" justifyContent="between" className="px-2 py-1">
        <Flex grow pointer alignItems="center" gap={1} onClick={() => (!props.alwaysExtended ? setExtended((prevValue) => !prevValue) : null)}>
          {!props.alwaysExtended && (
            <>
              {isExtended && <FaMinus className="text-secondary fa-icon" />}
              {!isExtended && <FaPlus className="text-secondary fa-icon" />}
            </>
          )}
          <Text>{LocalizeText(getResultTitle())}</Text>
        </Flex>
        <Flex gap={2}>
          {displayMode === NavigatorSearchResultViewDisplayMode.LIST && <FaTh className="text-secondary fa-icon" onClick={toggleDisplayMode} />}
          {displayMode >= NavigatorSearchResultViewDisplayMode.THUMBNAILS && <FaBars className="text-secondary fa-icon" onClick={toggleDisplayMode} />}
          {searchResult.action > 0 && searchResult.action === 1 && <FaWindowMaximize className="text-secondary fa-icon" onClick={showMore} />}
          {searchResult.action > 0 && searchResult.action !== 1 && <FaWindowRestore className="text-secondary fa-icon" onClick={showMore} />}
        </Flex>
      </Flex>
      {extended && (
        <>
          {gridHasTwoColumns ? (
            <AutoGrid columnCount={3} {...rest} columnMinWidth={110} columnMinHeight={130} className="mx-2">
              {searchResult.rooms.length > 0 &&
                searchResult.rooms.map((room, index) => <NavigatorSearchResultItemView key={index} roomData={room} thumbnail={true} />)}
            </AutoGrid>
          ) : (
            <Grid columnCount={1} className="navigator-grid" gap={0}>
              {searchResult.rooms.length > 0 && searchResult.rooms.map((room, index) => <NavigatorSearchResultItemView key={index} roomData={room} />)}
            </Grid>
          )}
        </>
      )}
    </Column>
  );
};
