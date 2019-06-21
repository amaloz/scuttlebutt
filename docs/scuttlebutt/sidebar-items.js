initSidebarItems({"constant":[["AES_HASH","`AesHash` with a fixed key."],["FIXED_KEY_AES128","Fixed-key AES-128."]],"mod":[["cointoss","Implementation of a simple two-party coin tossing protocol using a PRG as a commitment."],["commitment","A trait defining a Commitment Scheme and an implementation in the random oracle model using SHA256."],["utils","Useful utility functions."]],"struct":[["Aes128","AES-128, encryption only."],["Aes256","AES-256, encryption only."],["AesHash","AES-based correlation-robust hash function."],["AesRng","Implementation of a random number generator based on fixed-key AES."],["Block","A 128-bit chunk."],["Block512","A 512-bit value."],["Channel","A standard read/write channel that implements `AbstractChannel`."],["HashChannel","An instantiation of the `AbstractChannel` trait which computes a running hash of all bytes read from and written to the channel."],["SyncChannel","A channel that implements `AbstractChannel` as well as `Send` and `Sync`."],["TrackChannel","A channel for tracking the number of bits read/written."]],"trait":[["AbstractChannel","A trait for managing I/O. `AbstractChannel`s are clonable, and provide basic read/write capabilities for both common and scuttlebutt-specific types."],["Malicious","A marker trait denoting that the given scheme is maliciously secure."],["SemiHonest","A marker trait denoting that the given scheme is semi-honest secure."]]});