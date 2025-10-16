import { FlatList, Text, View } from "react-native";
import posts from "../../../../assets/data/posts.json";
import PostListItem from "../../../components/PostListItem";

export default function HomeScreen() {
  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <PostListItem post={item} />}
    />
  );
}
