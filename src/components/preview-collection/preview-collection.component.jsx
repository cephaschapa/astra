import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './preview-component.styles.scss'

const CollectionPreview = ({title, items}) => {
    return (
        <div className="collection-preview">
            <h1>{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items.filter((item, idx)=>idx < 4).map(({id,...otherItemProps}) => (
                        <CollectionItem id={id} {...otherItemProps}/>
                    ))
                }
            </div>
        </div>
    )
}

export default CollectionPreview