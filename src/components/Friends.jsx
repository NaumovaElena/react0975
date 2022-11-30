import React from "react";
import { Link } from "react-router-dom";

const TableRow = (props) => {
  return (
    <tr>
      <th scope="row">{props.index + 1}</th>
      <td>
      <Link to={"/profile/" + props.id}>
          {props.name} {props.lastname}
      </Link>
    </td>
    </tr>
  );
};

class Friends extends React.Component {

  constructor(props) {
  super(props);
  this.state = {userRow: []};
}

componentDidMount() {
    // let users = props.function();
    // let users = this.props.function();
    this.props.function().then((users)=> {
      // let usersCount = Object.keys(users).length;
      let usersCount = users.length;
      let userRow = [];

      for (let i = 0; i < usersCount; i++) {
        userRow.push(
          <TableRow
            id={users[i].id}
            key={i}
            index={i}
            name={users[i].name}
            lastname={users[i].lastname}
          />
        );
      }
      // this.setState({userRow: userRow});
    });    
}

  render() {
      return (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Имя и Фамилия</th>
            </tr>
          </thead>
          {/* <tbody>{userRow}</tbody> */}
          <tbody></tbody>
          {/* <tbody>{this.state.userRow}</tbody> */}
        </table>
      );
  }  

}

export default Friends;
