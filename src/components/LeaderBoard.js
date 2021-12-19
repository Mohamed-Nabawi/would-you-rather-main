import React,{Component} from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';

export class LeaderBoard extends Component {
  static propType = {
    leaderboardData: PropType.array.isRequired
  };
  render(){
    const { leaderboardData } = this.props;

  return (
    <ul>
      {leaderboardData.map((user) => (
        <li className='user' key={user.id}>
          <img src={user.avatarURL} alt={`Avatar for ${user.name}`} />

          <div>
            <h1>{user.name}</h1>
            <p>{user.questionCount} Questions</p>
            <p>{user.answerCount} Answers</p>
            <p>{user.answerCount+user.questionCount} score</p>
          </div>
        </li>
      ))}
    </ul>
  )
}
}
  function mapStateToProps({ users }) {
    const leaderboardData = Object.values(users)
      .map(user => ({
        id: user.id,
        name: user.name,
        avatarURL: user.avatarURL,
        answerCount: Object.values(user.answers).length,
        questionCount: user.questions.length,
        total: Object.values(user.answers).length + user.questions.length
      }))
      .sort((a, b) => a.total - b.total)
      .reverse()
      .slice(0, 3);
    return {
      leaderboardData
    };
  }
export default connect(mapStateToProps)(LeaderBoard);