import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { favoritesSelector } from "../redux/selectors";

export const Favorites = () => {
  const favorites = useSelector(favoritesSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("favorites", favorites);
  });
  return;
};
