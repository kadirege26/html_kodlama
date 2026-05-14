// Sayfa yüklendiğinde butona tıklama olayını dinleyelim
document.addEventListener('DOMContentLoaded', () => {
    const buyButton = document.getElementById('buy-btn');

    if (buyButton) {
        buyButton.addEventListener('click', () => {
            // Tüm checkboxları listele
            const checkboxes = document.querySelectorAll('.buy-checkbox');
            let selectedCount = 0;

            // Seçili olanları say
            checkboxes.forEach(box => {
                if (box.checked) {
                    selectedCount++;
                }
            });

            // İşlem sonucu
            if (selectedCount > 0) {
                alert(`İşlem Başarılı! ${selectedCount} adet ürün sipariş listesine eklendi.`);
            } else {
                alert("Hata: Lütfen satın almak için en az bir ürün seçin.");
            }
        });
    }
});