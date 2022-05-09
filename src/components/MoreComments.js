import React from 'react';
import Item from './Item';

class MoreComments extends React.Component {
    state = {
        expanded: false,
    };

    toggleExapnded = () => {
        this.setState({
            expanded: true,
        });
    }

    renderExpnaded() {
        const { moreItems } = this.props;

        return moreItems.map((item) => {
            return (
                <Item item={item} key={item.id} />
            );
        });
    }

    getCommentAuthors() {
        const { moreItems } = this.props;
        const firstNames = moreItems.map((item) => item.fullName.split(' ')[0]);
        const uniqueFirstNames = firstNames.filter((fullName, i) => {
            return firstNames.indexOf(fullName) === i;
        });

        if (uniqueFirstNames.length <= 3) {
            return uniqueFirstNames.join(', ');
        }

        const firstTwoNames = uniqueFirstNames.slice(0, 2);

        return `${firstTwoNames.join(', ')} and ${uniqueFirstNames.length - 2} others`;
    }

    renderCollapsed() {
        const { moreItems } = this.props;
        const buttonText = `+${moreItems.length} more comments from ${this.getCommentAuthors()}`;

        return (
            <div className="load-more-btn-container">
                <div onClick={this.toggleExapnded} className="show-more-button">
                    {buttonText}
                </div>
                <div className="icon-container">
                    <div className="text">View full activity log</div>
                    <div className="icon"><img src={require("../assets/icons/play.png")} alt="" /></div>
                    
                </div>
            </div>
        );
    }
    
    render() {
        const { expanded } = this.state;

        if (expanded) {
            return this.renderExpnaded();
        }

        return this.renderCollapsed();
    }
}

export default MoreComments;