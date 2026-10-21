type Post = {
 id: number;          // id
 title: string;       // タイトル
 body: string;        // 本文
 published: boolean;  // 公開済みかどうか
};

type Draft = Partial<Post>;

type List = Pick<Post, 'id' | 'title'>;

type Published = Required<Post>;
