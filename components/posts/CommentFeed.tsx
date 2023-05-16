import { CommentType } from "./comment";
import CommentItem from "./CommentItem";

type Props = {
  comments?: CommentType[];
};

const CommentFeed = ({ comments = [] }: Props) => {
  return (
    <>
      {comments.map((comment: CommentType, index: number) => (
        <CommentItem key={index} data={comment} />
      ))}
    </>
  );
};

export default CommentFeed;
