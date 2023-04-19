import axios from "axios";
import { BASE_API } from "../../../../utils/constants";
import { getLocalStorage } from "../../../../utils/helper/localStorage";
import { LOCAL_STORAGE_TOKEN } from "../../../../utils/constants";


export const getAllMenu = async () => {
    const URL = `${BASE_API}/menu/getAllData`;
    try {
        const data = await axios.get(URL, {
            headers: {
                Authorization: `Bearer ${getLocalStorage(LOCAL_STORAGE_TOKEN)}`,
            },
        });

        const res = data.data;

        if(res.status === "success") {
            return Promise.resolve({
                status: "success",
                data: res.data,
            });
        }
    } catch (err) {
        return Promise.resolve({
            status: "error",
            message: err.response,
        });
    }
};

// fungsi untuk mengunggah data detail transaksi
export const addDetailTransaksi = async (values) => {
    // url untuk menambahkan data menu
    const URL = `${BASE_API}/detail_transaksi/create`;
    // melakukan request ke server
    try {
      // melakukan request ke server
      const data = await axios.post(URL, values, {
        headers: {
          Authorization: `Bearer ${getLocalStorage(LOCAL_STORAGE_TOKEN)}`, // mengambil token dari local storage
        },
      });
      // mengambil data dari response
      const res = data.data;
  
      // jika status response adalah success
      if (res.status === "success") {
        return Promise.resolve({
          status: "success",
          message: "Berhasil menambahkan detail transaksi",
          data: res.data,
        });
      }
    } catch (err) {
      // jika terjadi error
      // mengembalikan error
      return Promise.resolve({
        status: "error",
        message: err.response,
      });
    }
  };
  