import Select from 'react-select';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { AiOutlineClose } from 'react-icons/ai';

import Button from './../../../control/Button';
import useLocationForm from '../../../../api/useLocationForm';
import styles from './ChangeAddress.module.scss';

function ChangeAddress({ handleClose, getData }) {
    const { state, onCitySelect, onDistrictSelect, onWardSelect } = useLocationForm(true);

    const { cityOptions, districtOptions, wardOptions, selectedCity, selectedDistrict, selectedWard } = state;

    // tạo state để lưu giá trị của form
    const [valueForm, setValueForm] = useState({
        name: '',
        phone: '',
        city: '',
        district: '',
        ward: '',
        specific: '',
    });

    // lấy dữ liệu từ input
    const handleChangeInput = (e) => {
        const { name, value } = e.target;

        setValueForm((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };

    const [city, setCity] = useState('');
    const [district, setDistrict] = useState('');
    const [ward, setWard] = useState('');

    const getCity = (option) => {
        onCitySelect(option);
        setCity(option);
    };

    const getDistrict = (option) => {
        onDistrictSelect(option);
        setDistrict(option);
    };
    const getWard = (option) => {
        onWardSelect(option);
        setWard(option);
    };

    valueForm.city = city.label;
    valueForm.district = district.label;
    valueForm.ward = ward.label;

    // submit
    const handleSubmit = (e) => {
        e.preventDefault();

        if (valueForm.name !== '' && valueForm.phone !== '' && valueForm.specific !== '') {
            setValueForm(valueForm);
            getData(valueForm);
            handleClose();
            toast.success('Cập nhật địa chỉ nhận hàng thành công');
        } else if (valueForm.name === '') {
            toast.warn('Bạn chưa nhập vào tên người nhận hàng!');
            return;
        } else if (valueForm.phone === '') {
            toast.warn('Bạn chưa nhập vào số điện thoại người nhận hàng!');
            return;
        } else if (valueForm.specific === '') {
            toast.warn('Vui lòng thêm vào địa chỉ nhận hàng cụ thể!');
            return;
        }
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <div className={styles.title}>
                    <h3>Đổi địa chỉ nhận hàng</h3>
                </div>

                <div className={styles.info}>
                    <div className={styles.input}>
                        <input name="name" type="name" placeholder="Họ và tên" onChange={handleChangeInput} />
                    </div>
                    <div className={styles.input}>
                        <input name="phone" type="phone" placeholder="Số điện thoại" onChange={handleChangeInput} />
                    </div>
                </div>

                <div className={styles.selection}>
                    <div className={styles.text}>
                        <p>Tỉnh/ Thành phố</p>
                    </div>
                    <Select
                        className={styles.select}
                        name="cityId"
                        key={`cityId_${selectedCity?.value}`}
                        isDisabled={cityOptions.length === 0}
                        options={cityOptions}
                        onChange={getCity}
                        placeholder="Tỉnh/Thành"
                        defaultValue={selectedCity}
                    />
                </div>

                <div className={styles.selection}>
                    <div className={styles.text}>
                        <p>Quận/ Huyện</p>
                    </div>
                    <Select
                        className={styles.select}
                        name="districtId"
                        key={`districtId_${selectedDistrict?.value}`}
                        isDisabled={districtOptions.length === 0}
                        options={districtOptions}
                        onChange={getDistrict}
                        placeholder="Quận/Huyện"
                        defaultValue={selectedDistrict}
                    />
                </div>

                <div className={styles.selection}>
                    <div className={styles.text}>
                        <p>Xã/ Phường</p>
                    </div>
                    <Select
                        className={styles.select}
                        name="wardId"
                        key={`wardId_${selectedWard?.value}`}
                        isDisabled={wardOptions.length === 0}
                        options={wardOptions}
                        placeholder="Phường/Xã"
                        onChange={getWard}
                        defaultValue={selectedWard}
                    />
                </div>

                <div className={styles.specific}>
                    <input name="specific" type="specific" placeholder="Địa chỉ cụ thể" onChange={handleChangeInput} />
                </div>

                <div className={styles.button} onClick={handleSubmit}>
                    <Button primary rounded productDetail>
                        Giao đến địa chỉ này
                    </Button>
                </div>
            </form>

            <div className={styles.iconClose} onClick={handleClose}>
                <AiOutlineClose />
            </div>
        </div>
    );
}

export default ChangeAddress;
