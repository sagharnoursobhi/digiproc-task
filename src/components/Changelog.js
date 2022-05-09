
import React from 'react'
import '../assets/styles/task.scss'
import Item from './Item'
import MoreComments from './MoreComments'

class Changelog extends React.Component {

    renderFirstComments() {
        const { comments } = this.props.data;
        const firstThreeComments = comments.slice(0, 3);

        return firstThreeComments.map((item) => {
            return (
                <Item item={item} key={item.id} />
            );
        });
    }

    renderMoreComments() {
        const { comments } = this.props.data;
        const moreComments = comments.slice(3);

        return <MoreComments moreItems={moreComments} />;
    }

    render() {
        const { description } = this.props.data;

        return (
            <div>
                <div className="container">
                    <div className="header">Changelog</div>
                    <div className="description">{description}</div>
                    <div className="comment-container container">
                        {this.renderFirstComments()}
                        {this.renderMoreComments()}
                    </div>
                </div>
            </div>
        )
    }
}

export default Changelog;