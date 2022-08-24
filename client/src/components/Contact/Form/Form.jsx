import React, {useState} from 'react';
import styled from "@emotion/styled";
import {useNavigate} from "react-router";
import {CREATED_REQUEST} from "../../../utils/consts";

import {Wrapper, Error, Input, Inputs, Submit, Subject, Agreement} from "./Styles";

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
        formData.append('name', name)
        formData.append('mail', mail)
        formData.append('name', phone)
        formData.append('subject', subject)

        /*заготовка под заявки в БД*/
        /*createRequest(formData).then(navigator(CREATED_REQUEST))*/

        navigator(CREATED_REQUEST)
    }

    return (
        <Wrapper>
            <Inputs>
                <Input
                    placeholder={"Имя и фамилия"}
                    value={name}
                    onChange={event => {
                        setName(event.target.value)
                    }}
                />
                <Input
                    placeholder={"Почта"}
                    value={mail}
                    onChange={event => {
                        setMail(event.target.value)
                    }}
                />
                <Input
                    placeholder={"Телефон"}
                    value={phone}
                    onChange={event => {
                        setPhone(event.target.value)
                    }}
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
                    onChange={event => {
                        setSubject(event.target.value)
                    }}
                />
            </Subject>
            <Submit>
                <button onClick={e => ValidateForm(name, mail, phone, subject)}>Связаться по доставке</button>
            </Submit>
            <Agreement>Нажимая на кнопку, вы даете <a href="client/src/components/Contact/Form/Form#">согласие на обработку</a> своих персональных
                данных</Agreement>
        </Wrapper>
    );
};

export default Form;