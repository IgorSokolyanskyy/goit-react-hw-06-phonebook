import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 450px;
  margin: auto;

  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: rgba(0, 0, 0, 0.468);

  color: rgb(244, 244, 244);
  font-size: 20px;
`;

export const Title = styled.h1`
  margin-top: 8px;
  margin-bottom: 16px;
`;

export const Subtitle = styled.h2`
  font-size: 34px;
  margin-bottom: 12px;
`;
export const P = styled.p`
  margin-bottom: 8px;
  color: #ff3737;
`;

// componentDidMount() {
//   const contacts = localStorage.getItem('contacts');
//   const parsedContacts = JSON.parse(contacts);

//   if (parsedContacts) {
//     this.setState({ contacts: parsedContacts });
//   }
// }

// componentDidUpdate(_, prevState) {
//   // const contacts = this.state;

//   if (this.state.contacts !== prevState.contacts) {
//     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//   }
// }
