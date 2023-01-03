import { React, useContext, useState } from 'react'
import { db } from "../../dbconnection/firebase"
import { collection, addDoc, deleteDoc, updateDoc, doc } from "firebase/firestore";
import Modal from 'react-bootstrap/Modal';
import { Store } from '../../app/store';
import Button from 'react-bootstrap/Button';
import { BsArrowClockwise } from 'react-icons/bs';

function List(props) {
    const { user, userName, phone, searchBar, setShow, amount, setAmount, collectionId, email, uid } = useContext(Store);

    const [modalData, setModalData] = useState(null)
    const [secondShow, setSecondShowShow] = useState(false);

    const handleClose = () => setSecondShowShow(false);

    const filteredData = searchBar.filter((el) => {
        if (props.input === '') {
        }
        else {
            return el.data.title.toLowerCase().includes(props.input)
        }
    })

    const buyButton = async (id, title, category, selleremail, selleruid, price, description) => {

        if (price > amount) {
            alert("bakiyeniz yetersizdir");
        }
        else {
            const today = new Date();
            const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + '  ' + today.getHours() + ':' + today.getMinutes();

            const receivedUid = uid;
            const receivedName = userName;
            const receivedPhone = phone;
            const receivedEmail = email;

            const ReceivedCollRef = collection(db, 'receivedItem')
            addDoc(ReceivedCollRef, { id, title, category, price, date, selleremail, selleruid, receivedUid, receivedName, receivedPhone, receivedEmail, description })
                .then(response => {
                    console.log(response.id)
                })
                .catch(error => {
                    console.log(error.message);
                })

            const SoldCollRef = collection(db, 'soldItem')
            addDoc(SoldCollRef, { id, title, category, price, date, selleremail, selleruid, receivedUid, receivedName, receivedPhone, receivedEmail, description })
                .then(response => {
                    console.log(response.id)
                })
                .catch(error => {
                    console.log(error.message);
                })

            const currentAmount = (amount - price);
            const q = doc(db, "users", collectionId);
            updateDoc(q, {
                amount: currentAmount
            });
            setAmount(currentAmount);
            async function DeleteSubmit(id) {
                await deleteDoc(doc(db, "product", id));
                window.location.reload();
            }
            DeleteSubmit(id)
            setShow(false);
        }
    }

    return (
        <div className="h-auto">
            {(modalData != null) &&
                <>
                    <Modal show={secondShow} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                        <Modal.Header closeButton>
                            <Modal.Title>Bu ürünü satın almak üzeresiniz</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Onayladığınız takdirde {modalData.data.title} ürününü {modalData.data.price} TL'ye satın alacaksınız?</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Kapat
                            </Button>
                            <Button variant="primary" onClick={() => { buyButton(modalData.id, modalData.data.title, modalData.data.category, modalData.data.useremail, modalData.data.useruid, modalData.data.price, modalData.data.description) }}>
                                Satın Al
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </>}
            <div>
                <span className='p-2'>Item List</span>
            </div>

            <div className='space-y-2'>
                {filteredData.map((item) => (
                    <div className='mx-1'>
                        <div onClick={() => {user && setSecondShowShow(true); setModalData(item) }}
                            className={`relative flex items-center gap-3 border-b py-3 rounded hover:bg-blue-50 hover:text-sky-600 hover:border-sky-600 hover:border ${!user ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                            key={searchBar.id} >
                            <BsArrowClockwise className='ml-5 w-5 h-5' />
                            <span className='absolute right-3 top-1 text-xs text-gray-400'>{item.data.category}</span>
                            <span className=''>{item.data.title}</span>
                            <span className='absolute right-3 bottom-1 text-xs'>{item.data.price}$</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default List