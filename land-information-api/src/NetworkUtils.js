export function FindByPolygon(method, url, dto) {
  let options = {
    method: method,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(dto)
  };
  return fetch(url, options)
    .then((response) => {
      console.log(response.status)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error(error);
    });
}

export function SendEmailFN(method, url, dto) {
  let options = {
    method: method,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(dto)
  };
  return fetch(url, options)
    .then(
      (response) => {
      if (!response.ok) {
        alert("이미 가입된 이메일이거나 올바르지 않은 이메일입니다.")
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      alert("이메일이 발송되었습니다. 인증번호를 입력해주세요 (발송시간이 최대 5분 소요됩니다.")
      return data;
    })
    .catch((error) => {
      console.error(error);
    });
}
