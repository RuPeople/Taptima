import React, {useState} from 'react';
import styled from "@emotion/styled";
import {useNavigate} from "react-router";
import {CREATED_REQUEST} from "../../utils/consts";

const Wrapper = styled.div`
  width: 50%;
`
const Inputs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  padding-bottom: 50px;
`
const Input = styled.input`
  background: #FFFFFF;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.06);
  border-radius: 3px;
  border: none;

  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 15px;
  /* identical to box height, or 100% */
  padding: 20px;
  letter-spacing: 0.2px;

  color: #B7B7B7;
`
const Subject = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  display: flex;
  flex-direction: column;
  
  & span {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 17px;
    /* identical to box height, or 100% */

    letter-spacing: 0.2px;

    color: #606F7A;
    margin-bottom: 20px;
  }
  & textarea {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 17px;
    /* identical to box height, or 100% */

    letter-spacing: 0.2px;

    color: #606F7A;
    
    padding: 20px;
    
    background: #FFFFFF;
    box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.06);
    border-radius: 3px;
    border: none;
    height: 125px;
    
    resize: vertical;
  }
  
  margin-bottom: 20px;
`
const Submit = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  
  & button{
    background: #5DAAFF;
    border-radius: 5px;
    
    padding: 20px 30px;
    border: none;

    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 17px;
    /* identical to box height, or 100% */

    text-align: center;
    letter-spacing: 0.2px;

    color: #FCFDFF;
    
    cursor: pointer;
    
    &:hover{

      background: #2876CC!important;
      box-shadow: 0px 4px 40px rgba(40, 118, 204, 0.12);
    }
    
  }
  margin-bottom: 20px;
`

const Agreement = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 25px;
  /* or 147% */

  letter-spacing: 0.2px;

  color: #B7B7B7;
  
  & a {
    text-decoration: none;
    color: #606F7A;
  }
  
`


const Error = styled.span`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 15px;
  /* identical to box height, or 100% */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.2px;

  color: #FF5D5D;
`


const Form = () => {

    const navigator = useNavigate()

    const [name, setName] = useState("")
    const [mail, setMail] = useState("")
    const [phone, setPhone] = useState("")
    const [subject, setSubject] = useState("")

    const [error, setError] = useState("")

    const ValidateForm = () => {

        if (!phone) {
            setError("* Введите номер телефона")
            name.set
        }
        if (!mail) {
            setError("* Введите почту")
        }
        if (!name) {
            setError("* Введите Имя")
        }
        if (name && phone && mail) {
            setError("")
            AddRequest()
        }
    }

    const AddRequest = () => {
        const formData = new FormData()
        formData.append('name',name)
        formData.append('mail',mail)
        formData.append('name',phone)
        formData.append('subject',subject)

        /*заготовка под заявки в БД*/
        /*createRequest(formData).then(navigator(CREATED_REQUEST))*/

        navigator(CREATED_REQUEST)
    }

    return (
        <Wrapper>
            <Inputs>
                <Input
                    placeholder={"Имя и фамилия"}
                    value = {name}
                    onChange={event => {setName(event.target.value)}}
                />
                <Input
                    placeholder={"Почта"}
                    value = {mail}
                    onChange={event => {setMail(event.target.value)}}
                />
                <Input
                    placeholder={"Телефон"}
                    value = {phone}
                    onChange={event => {setPhone(event.target.value)}}
                />
            </Inputs>
            <div>
                {error
                    ? <Error>{error}</Error>
                    : <></>
                }

            </div>
            <Subject>
                <span>Опишите ваш запрос</span>
                <textarea
                    value={subject}
                    onChange={event => {setSubject(event.target.value)}}
                />
            </Subject>
            <Submit>
                <button onClick={e => ValidateForm(name, mail, phone, subject)}>Связаться по доставке</button>
            </Submit>
            <Agreement>Нажимая на кнопку, вы даете <a href="#">согласие на обработку</a> своих персональных данных</Agreement>
        </Wrapper>
    );
};

export default Form;