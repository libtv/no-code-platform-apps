export interface CommentVO {
    comment_no?: number;
    comment_parent: number | null;
    comment_content: string;
    comment_regdate: Date;
    comment_status?: string;
    board_no: number;
    user_id: string;
}
