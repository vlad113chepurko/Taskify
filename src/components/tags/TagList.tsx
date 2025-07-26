import './styles/_TagList.scss';
import {useState} from "react";
import useTagsStore from '@store/useTagsStore';

const TagList = () => {
  const { tags } = useTagsStore();
  const [selectedTagId, setSelectedTagId] = useState<string | null>(null);

  const handlePressed = (id: string) => {
    setSelectedTagId(id);
  }
  return (
    <div className='tags__wrapper'>
      {tags.map((tag) => (
        <div
          onClick={() => handlePressed(tag.id)}
          className={selectedTagId === tag.id ? 'tag__pressed' : 'tag'}
          key={tag.id}>
          <p>{tag.name}</p>
        </div>
      ))}
    </div>
  );
};

export default TagList;