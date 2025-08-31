import './styles/_TagList.scss';
import {useState} from "react";
import useTagsStore from '@store/useTagsStore';

type TagListProp = {
  onTagSelect?: (id: string) => void;
}

const TagList = ({ onTagSelect }: TagListProp) => {
  const { tags } = useTagsStore();
  const [selectedTagId, setSelectedTagId] = useState<string | null>(null);

  const handlePressed = (id: string) => {
    setSelectedTagId(id);
    if(onTagSelect) {
      onTagSelect(id);
    }
  }
  return (
    <div className='tags__wrapper'>
      {tags.map((tag) => (
        <div
          onClick={() => handlePressed(tag.id)}
          className={selectedTagId === tag.id ? 'tag__pressed' : 'tag'}
          key={tag.id}>
          {tag.name}
        </div>
      ))}
    </div>
  );
};

export default TagList;
